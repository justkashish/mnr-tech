import "../styles/globals.css"

export const metadata = {
  title: "MNR Technologies - Innovative Technology Solutions",
  description:
    "MNR Technologies provides innovative technology solutions including healthcare, banking, AI, cloud, and cybersecurity services.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}




// import "../styles/globals.css"

// export const metadata = {
//   title: "MNR Technologies - Innovative Technology Solutions",
//   description:
//     "MNR Technologies provides innovative technology solutions including healthcare, banking, AI, cloud, and cybersecurity services.",
// }

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>{children}</body>
//     </html>
//   )
// }

