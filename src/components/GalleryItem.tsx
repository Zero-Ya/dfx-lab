interface item {
  id: number,
  name: string,
  imageData: string,
  date: string,
  equipment: string,
  description: string,
}

const GalleryItem = ({ data }
  : {
    data: item;
  }
) => {
  return (
    <div className="flex flex-col justify-between size-full gap-2 cursor-pointer">
      <div className="flex h-full items-center bg-gray-200 rounded-lg">
        <img className="rounded-lg" src={data.imageData} />
      </div>
      
      <div>{data.name}</div>
    </div>
  )
}

export default GalleryItem
