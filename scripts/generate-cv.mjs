import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateCV() {
  const pdfDoc = await PDFDocument.create();
  
  // Standard A4: 595.28 x 841.89 points
  const page = pdfDoc.addPage([595.28, 841.89]);
  const { width, height } = page.getSize();

  // Fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const helveticaOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);
  const timesBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

  // Palette: Cream, Charcoal, Coral-Red (#FF4B2B -> 1, 0.294, 0.169), Soft Gray
  const colorBg = rgb(0.957, 0.945, 0.918); // #F4F1EA
  const colorDark = rgb(0.078, 0.078, 0.078); // #141414
  const colorAccent = rgb(1.0, 0.294, 0.169); // #FF4B2B
  const colorMuted = rgb(0.38, 0.38, 0.36); // #61615C
  const colorCardBg = rgb(0.98, 0.97, 0.95);
  const colorWhite = rgb(1, 1, 1);

  // Background
  page.drawRectangle({
    x: 0,
    y: 0,
    width,
    height,
    color: colorBg,
  });

  // Top Accent Bar & Geometric Block
  page.drawRectangle({
    x: 0,
    y: height - 12,
    width: width,
    height: 12,
    color: colorAccent,
  });

  // Header Asymmetric Graphic Block
  page.drawRectangle({
    x: 40,
    y: height - 145,
    width: width - 80,
    height: 110,
    color: colorDark,
  });

  // Red accent corner inside header
  page.drawRectangle({
    x: width - 65,
    y: height - 60,
    width: 25,
    height: 25,
    color: colorAccent,
  });

  // Monogram box
  page.drawRectangle({
    x: 60,
    y: height - 125,
    width: 60,
    height: 60,
    color: colorAccent,
  });
  page.drawText('FG', {
    x: 72,
    y: height - 108,
    size: 26,
    font: helveticaBold,
    color: colorWhite,
  });

  // Candidate Name
  page.drawText('FAJER AL-GHANIM', {
    x: 135,
    y: height - 85,
    size: 24,
    font: helveticaBold,
    color: colorWhite,
  });

  // Subtitle / Status
  page.drawText('GRAPHIC DESIGN STUDENT · AMERICAN UNIVERSITY OF KUWAIT (AUK)', {
    x: 135,
    y: height - 105,
    size: 9.5,
    font: helveticaBold,
    color: colorAccent,
  });

  page.drawText('Kuwait City, Kuwait  |  +965 5500 7788  |  fajer.alghanim@example.com  |  behance.net/fajeralghanim', {
    x: 135,
    y: height - 124,
    size: 8,
    font: helvetica,
    color: rgb(0.85, 0.85, 0.85),
  });

  // Left Column (Sidebar: Info, Education, Skills, Honors) - Width: 160
  // Right Column (Main: Statement, Selected Projects, Experience) - Width: 320

  const colLeftX = 40;
  const colRightX = 225;
  const topBodyY = height - 175;

  // SECTION HELPER
  function drawSectionTitle(text, x, y, accentWidth = 24) {
    page.drawText(text.toUpperCase(), {
      x,
      y,
      size: 11,
      font: helveticaBold,
      color: colorDark,
    });
    page.drawRectangle({
      x,
      y: y - 5,
      width: accentWidth,
      height: 2.5,
      color: colorAccent,
    });
  }

  // --- RIGHT COLUMN: PROFILE STATEMENT ---
  let curY = topBodyY;
  drawSectionTitle('Profile & Creative Focus', colRightX, curY, 35);
  curY -= 20;

  const summary = [
    'Third-year Graphic Design undergraduate at the American University of Kuwait with an',
    'expressive, print-first sensibility and deep passion for visual identity systems, bilingual Arabic-',
    'English typography, and publication design. Experienced in transforming conceptual research',
    'into tactile physical publications, modular grid systems, and contemporary brand narratives.'
  ];
  for (const line of summary) {
    page.drawText(line, {
      x: colRightX,
      y: curY,
      size: 8.5,
      font: helvetica,
      color: colorDark,
      lineHeight: 12,
    });
    curY -= 12;
  }

  curY -= 14;

  // --- RIGHT COLUMN: SELECTED DESIGN PROJECTS ---
  drawSectionTitle('Selected Academic & Studio Projects', colRightX, curY, 40);
  curY -= 22;

  const projects = [
    {
      title: 'Qaf Specialty Coffee — Brand Identity & Packaging',
      course: 'Coursework: Advanced Typography Studio II (Fall 2025)',
      desc: 'Developed a comprehensive bilingual brand system and packaging suite for a contemporary Kuwaiti roastery. Crafted custom modern Kufic letterforms paired with Swiss modernist structural grids.',
    },
    {
      title: 'Sawt: Gulf Architecture Quarterly — Publication Design',
      course: 'Coursework: Editorial & Publication Design Lab (Spring 2025)',
      desc: 'Designed a 48-page experimental editorial catalog exploring regional modernism and vernacular facades. Integrated tactile paper choices, custom baseline grids, and bilingual section dividers.',
    },
    {
      title: 'Mawsem Botanical Infusions — Sustainable Packaging Series',
      course: 'Coursework: Sustainable Packaging & Materials (Fall 2024)',
      desc: 'Formulated a minimalist apothecary packaging family utilizing UV-embossed recycled kraft board, amber glass bottles, and organic color palettes inspired by Gulf seasonal flora.',
    },
    {
      title: 'Echoes of Modernism — Silkscreen Typographic Posters',
      course: 'Coursework: Advanced Printmaking & Screen Studio (Spring 2024)',
      desc: 'Screen-printed limited series of typographic exhibition posters exploring the intersection of classical Arabic calligraphic balance and geometric Bauhaus modular construction.',
    },
  ];

  for (const proj of projects) {
    page.drawText(proj.title, {
      x: colRightX,
      y: curY,
      size: 9.5,
      font: helveticaBold,
      color: colorDark,
    });
    curY -= 12;

    page.drawText(proj.course, {
      x: colRightX,
      y: curY,
      size: 7.5,
      font: helveticaOblique,
      color: colorAccent,
    });
    curY -= 11;

    page.drawText(proj.desc, {
      x: colRightX,
      y: curY,
      size: 8,
      font: helvetica,
      color: colorMuted,
      lineHeight: 11,
      maxWidth: 330,
    });
    curY -= 25;
  }

  // --- RIGHT COLUMN: PRACTICAL EXPERIENCE ---
  curY -= 5;
  drawSectionTitle('Internship & Gallery Experience', colRightX, curY, 35);
  curY -= 22;

  page.drawText('Design & Exhibition Intern — Contemporary Art Platform (CAP) Kuwait', {
    x: colRightX,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: colorDark,
  });
  page.drawText('Summer 2025  |  Kuwait City', {
    x: colRightX + 220,
    y: curY,
    size: 7.5,
    font: helvetica,
    color: colorMuted,
  });
  curY -= 12;
  page.drawText('Assisted in layout production for bi-annual exhibition catalogs, wall text vinyl signage, and bilingual digital promotional collateral for resident contemporary artists.', {
    x: colRightX,
    y: curY,
    size: 8,
    font: helvetica,
    color: colorMuted,
    maxWidth: 330,
  });
  curY -= 24;

  page.drawText('Student Graphic Designer — AUK Student Media Association', {
    x: colRightX,
    y: curY,
    size: 9,
    font: helveticaBold,
    color: colorDark,
  });
  page.drawText('2024 – Present', {
    x: colRightX + 250,
    y: curY,
    size: 7.5,
    font: helvetica,
    color: colorMuted,
  });
  curY -= 12;
  page.drawText('Responsible for creative direction and editorial layout of the campus quarterly art zine, event poster campaigns, and university cultural festival promotional prints.', {
    x: colRightX,
    y: curY,
    size: 8,
    font: helvetica,
    color: colorMuted,
    maxWidth: 330,
  });

  // --- LEFT COLUMN: EDUCATION, TECHNICAL SKILLS, AWARDS, LANGUAGES ---
  let leftY = topBodyY;

  // Education
  drawSectionTitle('Education', colLeftX, leftY, 25);
  leftY -= 20;

  page.drawText('Bachelor of Fine Arts (BFA)', {
    x: colLeftX,
    y: leftY,
    size: 8.5,
    font: helveticaBold,
    color: colorDark,
  });
  leftY -= 11;
  page.drawText('Graphic Design Major', {
    x: colLeftX,
    y: leftY,
    size: 8,
    font: helvetica,
    color: colorDark,
  });
  leftY -= 10;
  page.drawText('American University of Kuwait', {
    x: colLeftX,
    y: leftY,
    size: 8,
    font: helveticaBold,
    color: colorAccent,
  });
  leftY -= 10;
  page.drawText('Expected Graduation: June 2026', {
    x: colLeftX,
    y: leftY,
    size: 7.5,
    font: helvetica,
    color: colorMuted,
  });
  leftY -= 10;
  page.drawText('Cumulative GPA: 3.88 / 4.00', {
    x: colLeftX,
    y: leftY,
    size: 7.5,
    font: helvetica,
    color: colorMuted,
  });
  leftY -= 24;

  // Design Disciplines
  drawSectionTitle('Core Disciplines', colLeftX, leftY, 25);
  leftY -= 18;

  const disciplines = [
    'Visual Identity Systems',
    'Bilingual Editorial Design',
    'Typography & Lettering',
    'Packaging & Print Production',
    'Poster & Screenprinting',
    'Wayfinding & Spatial Signage',
    'Grid Systems & Layout',
  ];
  for (const d of disciplines) {
    page.drawRectangle({
      x: colLeftX,
      y: leftY + 2,
      width: 4,
      height: 4,
      color: colorAccent,
    });
    page.drawText(d, {
      x: colLeftX + 10,
      y: leftY,
      size: 7.5,
      font: helvetica,
      color: colorDark,
    });
    leftY -= 13;
  }
  leftY -= 12;

  // Technical & Software
  drawSectionTitle('Tools & Software', colLeftX, leftY, 25);
  leftY -= 18;

  const tools = [
    'Adobe InDesign (Expert)',
    'Adobe Illustrator (Expert)',
    'Adobe Photoshop (Proficient)',
    'Figma & UI Prototyping',
    'Risograph & Screenprint',
    'Bookbinding & Prepress',
    'FontLab / Glyphs (Basics)',
  ];
  for (const t of tools) {
    page.drawRectangle({
      x: colLeftX,
      y: leftY + 2,
      width: 4,
      height: 4,
      color: colorDark,
    });
    page.drawText(t, {
      x: colLeftX + 10,
      y: leftY,
      size: 7.5,
      font: helvetica,
      color: colorDark,
    });
    leftY -= 13;
  }
  leftY -= 12;

  // Honors & Recognition
  drawSectionTitle('Honors & Awards', colLeftX, leftY, 25);
  leftY -= 18;

  const honors = [
    { title: "Dean's Honor List", year: '2023, 2024, 2025' },
    { title: 'AUK Annual Student Exhibition', year: '1st Place Typography (2025)' },
    { title: 'Kuwait Young Creatives Showcase', year: 'Selected Finalist (2024)' },
  ];
  for (const h of honors) {
    page.drawText(h.title, {
      x: colLeftX,
      y: leftY,
      size: 7.5,
      font: helveticaBold,
      color: colorDark,
    });
    leftY -= 9;
    page.drawText(h.year, {
      x: colLeftX,
      y: leftY,
      size: 7,
      font: helveticaOblique,
      color: colorMuted,
    });
    leftY -= 12;
  }
  leftY -= 10;

  // Languages
  drawSectionTitle('Languages', colLeftX, leftY, 25);
  leftY -= 18;
  page.drawText('Arabic — Native (Fluent)', {
    x: colLeftX,
    y: leftY,
    size: 7.5,
    font: helvetica,
    color: colorDark,
  });
  leftY -= 12;
  page.drawText('English — Fluent (Academic/Professional)', {
    x: colLeftX,
    y: leftY,
    size: 7.5,
    font: helvetica,
    color: colorDark,
  });

  // Footer bar
  page.drawRectangle({
    x: 40,
    y: 30,
    width: width - 80,
    height: 1,
    color: rgb(0.8, 0.8, 0.78),
  });

  page.drawText('Fajer Al-Ghanim — Graphic Design Portfolio & CV  |  Academic Year 2025–2026  |  American University of Kuwait', {
    x: 40,
    y: 18,
    size: 7,
    font: helvetica,
    color: colorMuted,
  });

  const pdfBytes = await pdfDoc.save();
  const publicDir = path.resolve(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  const destPath = path.join(publicDir, 'Fajer-AlGhanim-Graphic-Design-CV.pdf');
  fs.writeFileSync(destPath, pdfBytes);
  console.log(`CV PDF successfully generated at: ${destPath} (${pdfBytes.length} bytes)`);
}

generateCV().catch((err) => {
  console.error('Error generating CV PDF:', err);
  process.exit(1);
});
