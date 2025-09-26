const logos = [
  { alt: "Client 1", src: "/placeholder.svg" },
  { alt: "Client 2", src: "/placeholder.svg" },
  { alt: "Client 3", src: "/placeholder.svg" },
  { alt: "Client 4", src: "/placeholder.svg" },
]

const TrustedBy = () => {
  return (
    <section className="py-10 border-t border-border bg-background/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-muted-foreground mb-6">Trusted by teams like yours</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-80">
          {logos.map((l, i) => (
            <div key={i} className="flex items-center justify-center">
              <img src={l.src} alt={l.alt} className="h-8 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy;
