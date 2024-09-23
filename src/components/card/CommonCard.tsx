import Image from "next/image"

const CommonCard = ({item}) => {
    return (
      <div
      className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
    >
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Image
          alt={item.imageAlt}
          src={item.imageSrc}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <a href={item.href}>
            <span aria-hidden="true" className="absolute inset-0" />
            {item.name}
          </a>
        </h3>
        {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{item.options}</p>
          <p className="text-base font-medium text-gray-900">{item.subtext}</p>
        </div>
      </div>
    </div>
    );
};

export default CommonCard;