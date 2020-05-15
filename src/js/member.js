import { renderProfile } from "./header";
import getMember from "./helper/getMember.js";

const callback = (data = {}) => {
    const { member } = data;
    $.member = member || null;
    renderProfile(member);
};
getMember(data => callback(data));
