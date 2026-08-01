import { useState } from 'react'
import { FiZoomIn } from 'react-icons/fi'
import { galleryItems } from '@/data/gallery'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Lightbox } from '@/components/ui/Lightbox'

const aspectClasses = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  square: '',
}

export function Gallery() {
  const [lightbox, setLightbox] = useState<{ title: string; gradient: string } | null>(null)

  return (
    <section id="gallery" className="section-padding relative bg-bg-light/50">
      <div className="max-w-7xl mx-auto">
        <div className="reveal-up">
          <SectionHeading
            label="Gallery"
            title="Visual Showcase"
            subtitle="Snapshots of projects, events, and milestones"
          />
        </div>

        <div className="reveal-scale columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`break-inside-avoid group cursor-pointer ${aspectClasses[item.aspect]}`}
              onClick={() => setLightbox({ title: item.title, gradient: item.gradient })}
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} ${
                  item.aspect === 'tall' ? 'h-80' : item.aspect === 'wide' ? 'h-48' : 'h-56'
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <span className="text-xs text-white/60 uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white text-center">
                    {item.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <FiZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-300" />
                </div>
                <div className="absolute inset-0 scale-100 group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <Lightbox
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
          title={lightbox.title}
          gradient={lightbox.gradient}
        />
      )}
    </section>
  )
}
