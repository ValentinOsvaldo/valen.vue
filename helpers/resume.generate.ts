/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { resumeContentEn, resumeContentEs } from "./resume.content";
import robotoRegularUri from "~/assets/fonts/Roboto-Regular.ttf?inline";
import robotoItalicUri from "~/assets/fonts/Roboto-Italic.ttf?inline";
import robotoBoldUri from "~/assets/fonts/Roboto-Bold.ttf?inline";
import robotoBoldItalicUri from "~/assets/fonts/Roboto-BoldItalic.ttf?inline";

export async function generateResume(lang: "es" | "en" = "en") {
  if (import.meta.server) return;

  // Dynamic load ⇒ nothing from pdfmake ever reaches the server
  const [{ default: pdfMake }, { default: pdfFonts }] = await Promise.all([
    import("pdfmake/build/pdfmake"),
    import("pdfmake/build/vfs_fonts"),
  ]);

  pdfMake.vfs = {
    ...pdfFonts.vfs,
    "Roboto-Regular.ttf": robotoRegularUri.split(',')[1]!,
    "Roboto-Italic.ttf": robotoItalicUri.split(',')[1]!,
    "Roboto-Bold.ttf": robotoBoldUri.split(',')[1]!,
    "Roboto-BoldItalic.ttf": robotoBoldItalicUri.split(',')[1]!,
  };

  pdfMake.fonts = {
    Roboto: {
      normal: "Roboto-Regular.ttf",
      bold: "Roboto-Bold.ttf",
      italics: "Roboto-Italic.ttf",
      bolditalics: "Roboto-BoldItalic.ttf",
    },
  };

  const c = lang === "es" ? resumeContentEs : resumeContentEn;

  const docDefinition: TDocumentDefinitions = {
    content: [
      // Header
      {
        text: `${c.info.name}`,
        fontSize: 20,
        bold: true,
        margin: [0, 0, 0, 2],
        alignment: "center",
      },
      {
        text: `${c.info.title}`,
        fontSize: 12,
        color: "#555555",
        alignment: "center",
        margin: [0, 0, 0, 10],
      },

      // Divider
      {
        canvas: [
          {
            type: "line",
            x1: 0,
            y1: 0,
            x2: 515,
            y2: 0,
            lineWidth: 1,
            lineColor: "#cccccc",
          },
        ],
        margin: [0, 0, 0, 10],
      },

      // Contact
      {
        text: [
          `${c.info.location}`,
          " | ",
          `${c.info.email}`,
          " | ",
          `${c.info.phone}`,
          " | ",
          {
            text: c.info.linkedin,
            link: `https://${c.info.linkedin}`,
            color: "blue",
          },
          " | ",
          {
            text: c.info.github,
            link: `https://${c.info.github}`,
            color: "blue",
          },
          " | ",
          {
            text: 'https://valen-vue.vercel.app/',
            link: 'https://valen-vue.vercel.app/',
            color: "blue",
          },
        ],
        fontSize: 9,
        margin: [0, 0, 0, 10],
        alignment: "center",
      },

      // About Me
      {
        text: c.about.title,
        style: "sectionHeader",
      },
      {
        text: c.about.text,
        fontSize: 9,
        margin: [0, 0, 0, 5],
      },

      // Experience
      {
        text: c.experience.title,
        style: "sectionHeader",
      },
      ...(c.experience.items.flatMap((job) => [
        {
          text: `${job.title} – ${job.company}`,
          style: "itemTitle",
        },
        {
          text: job.date,
          style: "itemDate",
        },
        {
          ul: job.bullets,
          style: "itemList",
        },
      ]) as any),

      // Projects
      {
        text: c.projects.title,
        style: "sectionHeader",
        margin: [0, 8, 0, 0],
      },
      ...c.projects.items.flatMap((project) => [
        {
          text: `${project.name} (${project.date})`,
          style: "itemTitle",
        },
        {
          text: project.description,
          fontSize: 9,
          margin: [0, 0, 0, 2],
        },
        {
          ul: project.bullets,
          style: "itemList",
        },
      ]),

      // Education
      {
        text: c.education.title,
        style: "sectionHeader",
        margin: [0, 8, 0, 0],
      },
      ...c.education.items.map((edu) => ({
        text: `${edu.degree} – ${edu.institution} (${edu.date})`,
        style: "itemTitle",
      })),

      // Skills
      {
        text: c.skills.title,
        style: "sectionHeader",
        margin: [0, 8, 0, 0],
      },
      {
        columns: [
          {
            ul: c.skills.items.slice(0, Math.ceil(c.skills.items.length / 2)),
            style: "itemList",
          },
          {
            ul: c.skills.items.slice(Math.ceil(c.skills.items.length / 2)),
            style: "itemList",
          },
        ],
      },

      // Languages
      {
        text: c.languages.title,
        style: "sectionHeader",
        margin: [0, 8, 0, 0],
      },
      {
        ul: c.languages.items,
        style: "itemList",
      },
    ],

    styles: {
      sectionHeader: {
        fontSize: 12,
        bold: true,
        margin: [0, 10, 0, 2],
        color: "#003366",
      },
      itemTitle: {
        fontSize: 11,
        bold: true,
        margin: [0, 4, 0, 0],
      },
      itemDate: {
        fontSize: 9,
        italics: true,
        color: "#666666",
        margin: [0, 0, 0, 2],
      },
      itemList: {
        fontSize: 9,
        margin: [0, 0, 0, 6],
      },
    },

    defaultStyle: {
      font: "Roboto",
    },

    pageMargins: [40, 50, 40, 50],
  };

  // Esto solo se ejecutará en el navegador
  pdfMake
    .createPdf(docDefinition)
    .download(
      lang === "es"
        ? "Osvaldo_Valentin_Garcia_CV.pdf"
        : "Osvaldo_Valentin_Resume.pdf",
    );
}
