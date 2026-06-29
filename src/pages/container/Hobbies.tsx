export default function Hobbies() {
  const hobbies = [
  "Hiking",
  "Jogging",
  "Trekking",
  "Photography",
  "Traveling",
  "Online Gaming",
  "Audio Editing/Mixing",
  "Playing Pickleball"
];
  return (
    <div className="w-full flex">
      <div className="w-[413px] rounded-2xl bg-white p-8 md:p-8 shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
            My Hobbies
        </h1>
        <div className="w-full h-px bg-gray-100 rounded-full"></div>
        <p className="text-sm text-gray-800 font-medium">
          {hobbies.map((hobby) => (
            <span key={hobby} className="block">
              {hobby}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}