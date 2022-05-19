export default function Avatar() {
  return (
    <div className="flex flex-row items-center space-x-4 text-right">
      <div>
        <div className="text-sm italic">Handicrafted by</div>
        <div>Jim HLS</div>
      </div>
      <img
        src="https://picsum.photos/200/300?grayscale"
        alt=""
        className="w-14 h-14 rounded-full"
        loading="lazy"
      ></img>
    </div>
  );
}
