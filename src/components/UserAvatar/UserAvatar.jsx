import React from "react";

const UserAvatar = ({src,alt}) => {
  return (
    <div className="rounded-full overflow-hidden border-2 border-white shadow-sm size-10">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
};

export default UserAvatar;
