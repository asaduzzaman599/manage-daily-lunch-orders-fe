import Link from "next/link"

const NavigationBtn = ({item}: {item: {href: string; name: string; current: boolean}}) => {
    

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
    return (
        <Link 
        href={item.href}
                  
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  )}
                  >
                  {item.name}
                </Link>
    );
};

export default NavigationBtn;