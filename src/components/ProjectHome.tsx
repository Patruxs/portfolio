export default function ProjectHome() {
  return (
    <>
      <div className="w-full flex items-center mt-20 mb-8">
        <div className="text-3xl font-rollingStone">projects</div>
      </div>

      <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4">
        <div className="md:col-span-2 shadow-md shadow-base-400/20 flex flex-col gap-2 items-start border-1 border-base-400/10 dark:border-base-400 rounded-xl pb-4 px-2 pt-2">
          <div className="ml-4 mt-4 text-base-400 dark:text-base-100 font-semibold">
            Hotel Booking Service
          </div>
          <div className="ml-4 text-base-400/70 dark:text-base-100/60 text-sm">
            Infrastructure / Fullstack Developer
          </div>
          <div className="ml-4 mr-1 text-base-400/70 dark:text-base-100/60 text-start text-sm">
            A{" "}
            <span className="font-bold text-sky-700 dark:text-sky-500">
              scalable
            </span>{" "}
            hotel booking platform with secure reservations,{" "}
            <span className="font-bold text-sky-700 dark:text-sky-500">
              AWS deployment
            </span>
            , and automated CI/CD.
          </div>
          <ul className="ml-8 mr-1 mt-2 list-outside list-disc">
            <li className="pr-8 text-sm text-base-400/70 dark:text-base-100/60">
              Prevented overbooking with transactional room inventory updates
              and row-level locking.
            </li>
            <li className="pr-8 text-sm text-base-400/70 dark:text-base-100/60">
              Improved availability by distributing traffic across multiple EC2
              instances behind an Application Load Balancer.
            </li>
            <li className="pr-8 text-sm text-base-400/70 dark:text-base-100/60">
              Automated AWS infrastructure provisioning with modular Terraform
              and private RDS networking.
            </li>
            <li className="pr-8 text-sm text-base-400/70 dark:text-base-100/60">
              Optimized deployment with Docker multi-stage builds and a GitHub
              Actions-Ansible pipeline.
            </li>
          </ul>
          <div className="ml-4 mr-1 mt-3 flex flex-wrap gap-1">
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Spring Boot
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              PostgreSQL
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              AWS
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Terraform
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Ansible
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              Docker
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              GitHub Actions
            </div>
            <div className="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-base-200/70 dark:bg-base-400 px-1 py-0 text-[10px]">
              React
            </div>
          </div>
          <div className="flex w-full h-full justify-end items-end">
            <a
              className="flex flex-row justify-end items-center gap-1 pr-4 py-2 underline underline-offset-4 text-sm font-sans hover:text-base-400/70 dark:hover:text-base-300"
              href="https://github.com/Patruxs/hotel-booking-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
