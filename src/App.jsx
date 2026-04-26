import React, { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import WorkReport from './components/WorkReport'

const App = () => {
  const reportRef = useRef(null)
  const [isPdfExporting, setIsPdfExporting] = useState(false)

  /* ── Scroll to report section ── */
  const handleShowReport = () => {
    const el = document.getElementById('report')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  /* ── PDF Export ── */
  const handleDownload = async () => {
    if (isPdfExporting) return
    setIsPdfExporting(true)

    try {
      const html2canvas = (await import('html2canvas')).default
      const { jsPDF } = await import('jspdf')

      /* ── Constants ── */
      const A4_W      = 210   // mm
      const A4_H      = 297   // mm
      const MARGIN    = 13    // mm side margin
      const CONTENT_W = A4_W - MARGIN * 2
      const FOOTER_Y  = A4_H - 8   // mm from top where footer text sits
      const USABLE_H  = A4_H - MARGIN - 16  // bottom boundary before footer zone

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      let pageNum  = 1
      let cursorY  = MARGIN

      /* ── Dark background fill for current page ── */
      const fillDarkBg = () => {
        pdf.setFillColor(0, 34, 30)
        pdf.rect(0, 0, A4_W, A4_H, 'F')
        // Subtle ambient teal blobs
        pdf.setFillColor(21, 102, 93)
        pdf.setGState(pdf.GState({ opacity: 0.06 }))
        pdf.ellipse(40, 60, 80, 55, 'F')
        pdf.setFillColor(47, 138, 129)
        pdf.ellipse(175, 230, 60, 45, 'F')
        pdf.setGState(pdf.GState({ opacity: 1 }))
      }

      /* ── Footer on current page ── */
      const drawFooter = () => {
        pdf.setFontSize(7.5)
        pdf.setTextColor(89, 182, 173)
        pdf.text('Nama & Injaz - Work Report - 2026 April', A4_W / 2, FOOTER_Y, { align: 'center' })
        pdf.setTextColor(110, 155, 148)
        pdf.text(String(pageNum), A4_W - MARGIN, FOOTER_Y, { align: 'right' })
      }

      /* ── Open a new page ── */
      const newPage = () => {
        drawFooter()           // footer on the page we're leaving
        pdf.addPage()
        pageNum++
        cursorY = MARGIN
        fillDarkBg()
      }

      /* ── Capture a DOM element as JPEG ── */
      const capture = async (el) => {
        const canvas = await html2canvas(el, {
          scale: 2.5,            // higher = sharper text and images
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#00221E',
          logging: false,
          scrollX: 0,
          scrollY: 0,
        })
        const imgData = canvas.toDataURL('image/jpeg', 0.93)
        const mmH = (canvas.height / canvas.width) * CONTENT_W
        return { imgData, mmH }
      }

      /*
       * ── Add a captured block to the PDF ──
       * gap = extra vertical space to add after the block (mm)
       * If the block does not fit on the remaining page, we open a new page first.
       * For very tall blocks (cards with many images), we clip them slightly
       * rather than letting them run off the page.
       */
      const addBlock = async (el, gap = 7) => {
        if (!el) return
        const { imgData, mmH } = await capture(el)
        const blockH = Math.min(mmH, USABLE_H - MARGIN)   // never taller than one full page

        // If the block won't fit, start a fresh page
        if (cursorY + blockH > USABLE_H && cursorY > MARGIN + 12) {
          newPage()
        }

        pdf.addImage(imgData, 'JPEG', MARGIN, cursorY, CONTENT_W, blockH)
        cursorY += blockH + gap
      }

      /* ════════════════════════════════════════════════
         STEP 0 — Hide nav/button chrome
         ════════════════════════════════════════════════ */
      const noPrint = document.querySelectorAll('.no-print')
      noPrint.forEach(el => (el.style.visibility = 'hidden'))
      await new Promise(r => setTimeout(r, 100)) // let browser repaint

      /* ════════════════════════════════════════════════
         PAGE 1 — COVER (drawn natively with jsPDF)
         ════════════════════════════════════════════════ */
      fillDarkBg()

      // Logo
      try {
        const logoResp = await fetch('/NITlogo.jpg')
        if (logoResp.ok) {
          const logoBlob = await logoResp.blob()
          const logoDataUrl = await new Promise(res => {
            const reader = new FileReader()
            reader.onload = () => res(reader.result)
            reader.readAsDataURL(logoBlob)
          })
          // Centered, reasonable size
          const logoW = 46
          const logoH = 20
          pdf.addImage(logoDataUrl, 'JPEG', (A4_W - logoW) / 2, 42, logoW, logoH)
        }
      } catch (_) { /* logo is not critical */ }

      // Thin accent line below logo
      pdf.setDrawColor(89, 182, 173)
      pdf.setGState(pdf.GState({ opacity: 0.22 }))
      pdf.setLineWidth(0.28)
      pdf.line(MARGIN + 24, 72, A4_W - MARGIN - 24, 72)
      pdf.setGState(pdf.GState({ opacity: 1 }))

      // "WORK REPORT" label
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(9.5)
      pdf.setTextColor(89, 182, 173)
      pdf.text('W O R K   R E P O R T', A4_W / 2, 90, { align: 'center' })

      // Name
      pdf.setFont('helvetica', 'bold')
      pdf.setFontSize(31)
      pdf.setTextColor(255, 255, 255)
      pdf.text('Shinaj Ahammed', A4_W / 2, 115, { align: 'center' })

      // Short divider
      pdf.setDrawColor(89, 182, 173)
      pdf.setGState(pdf.GState({ opacity: 0.28 }))
      pdf.setLineWidth(0.35)
      pdf.line(A4_W / 2 - 22, 122, A4_W / 2 + 22, 122)
      pdf.setGState(pdf.GState({ opacity: 1 }))

      // Meta info
      pdf.setFont('helvetica', 'normal')
      pdf.setFontSize(10.5)
      pdf.setTextColor(200, 228, 226)
      pdf.text('Employee ID: 4118', A4_W / 2, 136, { align: 'center' })

      pdf.setFontSize(12)
      pdf.setTextColor(89, 182, 173)
      pdf.text('Nama & Injaz', A4_W / 2, 150, { align: 'center' })

      pdf.setFontSize(8.5)
      pdf.setTextColor(120, 160, 155)
      pdf.text('Work Report - 2026 April', A4_W / 2, 163, { align: 'center' })

      // Bottom separator line
      pdf.setDrawColor(47, 138, 129)
      pdf.setGState(pdf.GState({ opacity: 0.18 }))
      pdf.setLineWidth(0.25)
      pdf.line(MARGIN, A4_H - 22, A4_W - MARGIN, A4_H - 22)
      pdf.setGState(pdf.GState({ opacity: 1 }))

      // Cover page footer text
      pdf.setFontSize(7.5)
      pdf.setTextColor(80, 115, 110)
      pdf.text('Nama & Injaz - Work Report - 2026 April', A4_W / 2, A4_H - 14, { align: 'center' })
      pdf.text('Confidential', A4_W - MARGIN, A4_H - 14, { align: 'right' })

      /* ════════════════════════════════════════════════
         PAGE 2+ — REPORT CONTENT
         Explicit order:
           1. Completed Works header
           2. Each completed work card  (one by one)
           3. Currently Working header
           4. Each current work card    (one by one)
           5. Footer note               (once, at the very end)
         ════════════════════════════════════════════════ */
      pdf.addPage()
      pageNum = 2
      cursorY = MARGIN
      fillDarkBg()

      /* 1 ── Completed Works section header */
      await addBlock(document.querySelector('#completed-works-header'), 10)

      /* 2 ── Completed work cards — targeted selector, excludes footer note */
      const completedCards = document.querySelectorAll('#completed-works-cards .glass-card')
      for (const card of completedCards) {
        await addBlock(card, 9)
      }

      /* 3 ── Currently Working section header */
      await addBlock(document.querySelector('#current-works-header'), 10)

      /* 4 ── Current work cards — targeted selector, excludes footer note */
      const currentCards = document.querySelectorAll('#current-works-cards .glass-card')
      for (const card of currentCards) {
        await addBlock(card, 9)
      }

      /* 5 ── Footer note — captured once, at the very end */
      const footerNote = document.querySelector('#report-footer-note')
      if (footerNote) {
        const { imgData, mmH } = await capture(footerNote)
        if (cursorY + mmH > USABLE_H && cursorY > MARGIN + 12) {
          newPage()
        }
        pdf.addImage(imgData, 'JPEG', MARGIN, cursorY, CONTENT_W, mmH)
        cursorY += mmH
      }

      /* Draw footer on the final page */
      drawFooter()

      /* ════════════════════════════════════════════════
         RESTORE UI CHROME & SAVE
         ════════════════════════════════════════════════ */
      noPrint.forEach(el => (el.style.visibility = ''))
      pdf.save('Shinaj_Ahammed_Work_Report.pdf')

    } catch (err) {
      console.error('PDF export failed:', err)
      document.querySelectorAll('.no-print').forEach(el => (el.style.visibility = ''))
      alert('PDF export encountered an issue. Please try again.')
    } finally {
      setIsPdfExporting(false)
    }
  }

  return (
    <div className="min-h-screen font-sans">
      <Navbar onDownload={handleDownload} isPdfExporting={isPdfExporting} />
      <HeroSection onShowReport={handleShowReport} />
      <WorkReport reportRef={reportRef} />
    </div>
  )
}

export default App
