"use client"
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body>
        <div className="text-center mt-10 text-red-600">
          A global error occurred: {error.message}
        </div>
      </body>
    </html>
  )
}
