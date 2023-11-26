import { UserGroupIcon, ArrowLeftOnRectangleIcon, TicketIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Kullanıcı Dostu',
    description: "Tüm hizmetlerimiz kullanıcı ve sunucu dostudur! Size sunulmadan önce özenle hazırlanır ve test edilirler.",
    icon: UserGroupIcon
  },
  {
    name: 'Yüksek Performans',
    description: "Tüm hizmetlerimizi yüksek performansta yaparız size ve müşterilere sunarız.",
    icon: ArrowLeftOnRectangleIcon
  },
  {
    name: "Hızlı Destet",
    description: "Tüm hizmetlerimiz için destek garantisi veriyoruz. Servis ekibimiz ile yanınızdayız.",
    icon: TicketIcon
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <h2 className="font-semibold leading-7 text-3xl text-primary" data-aos="fade-right">Nedir bu &quot;dijicore&quot;?</h2>
            <p className='text-base mt-4' data-aos="fade-right">
            Dijicore, içerik oluşturma konusunda tutku ve uzmanlığa sahip, her zaman en iyisi için çabalayan bir pazarlama ekibidir. 2023 yazında kurulan bu ekip, sosyal medya dünyasında yaratıcı içerikler sunmayı amaçlamaktadır. Ekip olarak, sosyal medya dünyasının karmaşıklığını anlıyor ve müşteri memnuniyetine odaklanarak projelerini başarıyla tamamlıyoruz.
            </p>
          </div>

          <dl className="mt-10 md:mt-0 md:w-1/2">
            {features.map((feature) => (
              <div key={feature.name} className="relative md:pl-9 pt-12" data-aos="fade-right">
                <dt className="font-semibold text-primary flex space-x-2 items-center">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-white">
                    <feature.icon className="h-5 w-5 text-base" aria-hidden="true" />
                  </div>
                  <span className='text-xl'>{feature.name}</span>
                </dt>{' '}
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
