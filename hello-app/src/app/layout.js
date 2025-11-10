

export default function RootLayout(props) {

  return <html lang="en">
    <body>
      {/* CHILDREN MEANS PAGE CONTENT */}
      {props.children}
    </body>
  </html>

}