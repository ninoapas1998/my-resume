export default function Hobbies() {
  return (
    <div className="w-full flex">
      <div className="w-[413px] rounded-2xl bg-white p-8 md:p-8 shadow-md flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
            My Hobbies
        </h1>
        <div className="w-full h-px bg-gray-100 rounded-full"></div>
        <p className="text-sm text-gray-800 font-medium">
            Traveling
            <br />
            Jogging
        </p>
      </div>
    </div>
  );
}