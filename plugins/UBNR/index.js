import { findByProps } from "@vendetta/metro";
import { after } from "@vendetta/patcher";
import { showToast } from "@vendetta/ui/toasts";

const UserProfile = findByProps("UserProfile");

let unpatch;

export function onLoad() {
  const customBannerUrl = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"; // Replace with your own image or GIF URL

  unpatch = after("UserProfile", UserProfile, (_, args, res) => {
    if (res?.props) {
      res.props.banner = customBannerUrl;
      res.props.bannerColor = "#000000"; // Optional fallback color
    }
  });

  showToast("UBNR banner applied locally!", 3000);
}

export function onUnload() {
  unpatch?.();
  showToast("UBNR banner removed.", 3000);
}
