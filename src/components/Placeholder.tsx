const Placeholder = ({ width }
  : {
    width: string;
  }) => {
  return (
    <div className={`bg-gray-100 ${width} rounded-xs h-5`}>
    </div>
  )
}

export default Placeholder
