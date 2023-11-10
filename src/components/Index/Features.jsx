import { UserGroupIcon, ArrowLeftOnRectangleIcon, TicketIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'User & Server Friendly',
    description: "All our services are user and server friendly! They are carefully prepared and tested before they are served to you.",
    icon: UserGroupIcon
  },
  {
    name: 'High Performance',
    description: "All our services run at high performance. It doesn't cause any lag or delay on your server.",
    icon: ArrowLeftOnRectangleIcon
  },
  {
    name: "Fast Support",
    description: "We guarantee support for all our services. We are with you with our service team.",
    icon: TicketIcon
  },
]

export default function Features() {
  return (
    <div className="overflow-hidden py-12">
      <div className="container mx-auto px-4">
        <div className="flex md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-full">
            <h2 className="font-semibold leading-7 text-3xl text-primary" data-aos="fade-right">What is &quot;iumProject&quot;?</h2>
            <p className='text-base mt-4' data-aos="fade-right">
              iumProject is a sales team with a passion and expertise in content creation, always striving for the best. Founded in summer 2023, this team aims to deliver creative content in the gaming world. We produce high quality setups, plugin configurations, web services to enrich players&quot; experiences and add fun new features. As a team, we understand the complexity of the gaming world and successfully complete their projects with a focus on customer satisfaction.
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
