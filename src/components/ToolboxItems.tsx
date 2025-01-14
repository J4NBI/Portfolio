
import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";

const ToolboxItems = ( { 
  items,
  className,
  itemsWrapperClassName
} : {
    items: {
      title: string;
      iconType: React.ElementType;
      
    } [];
    className?: string;
    itemsWrapperClassName?: string;
  }) => {
  return (
    <div className={twMerge("flex[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none  py-0.5 gap-6 md:pr-6",  itemsWrapperClassName)}>
        {items.map((item) => (
          <div key={item.title} className="inline-flex items-center font-semibold gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg">
            <span>{item.title}</span>
            <TechIcon component={item.iconType}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolboxItems