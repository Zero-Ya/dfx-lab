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
      <>
      <img className={`${current !== index && "hidden"} brightness-40 blur-xs w-full h-auto absolute bottom-0 top-1/2 min-[1024px]:top-auto -translate-y-1/2 min-[1024px]:translate-y-1/3 min-[1440px]:translate-y-1/2 -z-99"`} src={item.imageUrl} />
      <div className={`w-full h-full p-3 flex flex-col flex-1 absolute overflow-hidden
      ${current !== index && "hidden"}
      `}>
        <div className="flex h-full justify-center min-[800px]:justify-start text-white text-[10px] min-[600px]:text-[12px] min-[800px]:text-[16px] min-[1024px]:text-[20px] flex-col gap-2 min-[600px]:gap-6 py-4 px-10 min-[600px]:px-16 relative">
          <div className="text-[16px] min-[600px]:text-[24px] min-[800px]:text-[32px] min-[1024px]:text-[36px]">{item.title}</div>
          <div className="text-[14px] min-[600px]:text-[16px] min-[800px]:text-[20px] min-[1024px]:text-[24px]">{item.subtitle}</div>
          <div>{item.description}</div>
        </div>

      </div>
      </>
  )
}

export default NewsBox
