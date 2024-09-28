import { YTPlaylist } from "@/constants/YTPlaylists";

const YouTube = () => {
  return (
    <div className="mb-10 text-white p-5 border-[0.01px] rounded-sm border-gray-500">
      {YTPlaylist.map((playlist) => (
        <div key={playlist.id}>{playlist.playlistLink}</div>
      ))}
    </div>
  );
};

export default YouTube;
