import { Avatar, AvatarImage } from "./avatar";

export default function BotAvatar() {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/logo.png" className="p-1" />
    </Avatar>
  );
}
