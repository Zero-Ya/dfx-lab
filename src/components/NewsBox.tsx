interface item {
  id: number,
  title: string,
  subtitle: string,
  imageUrl: string,
  textData: string[],
  description: string
}

const NewsBox = ({ current, index, item }
  : {
    current: number;
    index: number;
    item : item;
  }) => {
  return (
      <div className="shrink-0 size-full min-[800px]:w-auto min-[800px]:snap-align-none snap-start flex min-[800px]:block justify-center items-center relative min-[800px]:static">
      {/* I can also do h-full w-auto and object-default or back to the original w-full h-auto */}
      <img className={`${current !== index && "min-[800px]:hidden"} min-[600px]:object-fill brightness-40 blur-xs w-hull h-auto min-[600px]:w-full min-[600px]:h-auto absolute bottom-0 top-1/2 min-[1024px]:top-auto -translate-y-1/2 min-[1024px]:translate-y-1/3 min-[1440px]:translate-y-1/2 -z-99"`} src={item.imageUrl} />
      <div className={`w-full h-full py-0 px-3 min-[600px]:p-3 flex flex-col flex-1 absolute overflow-hidden
      ${current !== index && "min-[800px]:hidden"}
      `}>
        <div className="flex h-full justify-start text-white text-[8px] min-[600px]:text-[10px] min-[800px]:text-[14px] min-[1024px]:text-[18px] flex-col gap-4 min-[600px]:gap-6 py-4 px-3 min-[600px]:px-9 min-[800px]:px-16 relative">
          <div className="text-[14px] min-[600px]:text-[22px] min-[800px]:text-[30px] min-[1024px]:text-[34px]">{item.title}</div>
          <div className="text-[12px] min-[600px]:text-[14px] min-[800px]:text-[18px] min-[1024px]:text-[22px]">{item.subtitle}</div>
          <div>{item.description}</div>
        </div>

      </div>
      </div>
  )
}

export default NewsBox
