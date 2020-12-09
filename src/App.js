import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": " Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": " Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰": "Smiling Face with Hearts",
  "😍": "Smiling Face with Heart-Eyes",
  "🤩": "Star-Struck",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😋": "Face Savoring Food",
  "😛 ": "Face with Tongue",
  "😜 ": "Winking Face with Tongue",
  "🤪 ": "Zany Face",
  "😝 ": "Squinting Face with Tongue",
  "🤑 ": "Money-Mouth Face",
  "🤗 ": "Hugging Face",
  "🤭 ": "Face with Hand Over Mouth",
  "🤫 ": "Shushing Face",
  "🤔 ": "Thinking Face",
  "🤐 ": "Zipper-Mouth Face",
  "🤨 ": "Face with Raised Eyebrow",
  "😐 ": "Neutral Face",
  "😑 ": "Expressionless Face",
  "😶 ": "Face Without Mouth",
  "😏 ": "Smirking Face",
  "😒 ": "Unamused Face",
  "🙄 ": "Face with Rolling Eyes",
  "😬 ": "Grimacing Face",
  "🤥 ": "Lying Face",
  "😌 ": "Relieved Face",
  "😔 ": "Pensive Face",
  "😪 ": "Sleepy Face",
  "🤤 ": "Drooling Face",
  "😴 ": "Sleeping Face",
  "😷 ": "Face with Medical Mask",
  "🤒 ": "Face with Thermometer",
  "🤕 ": "Face with Head-Bandage",
  "🤢 ": "Nauseated Face",
  "🤮 ": "Face Vomiting",
  "🤧 ": "Sneezing Face",
  "🥵 ": "Hot Face",
  "🥶 ": "Cold Face",
  "🥴 ": "Woozy Face",
  "😵 ": "Dizzy Face",
  "🤯 ": "Exploding Head",
  "🤠 ": "Cowboy Hat Face",
  "🥳 ": "Partying Face",
  "😎 ": "Smiling Face with Sunglasses",
  "🤓 ": "Nerd Face",
  "🧐 ": "Face with Monocle",
  "😕 ": "Confused Face",
  "😟 ": "Worried Face",
  "🙁 ": "Slightly Frowning Face",
  "😮 ": "Face with Open Mouth",
  "😯 ": "Hushed Face",
  "😲 ": "Astonished Face",
  "😳 ": "Flushed Face",
  "🥺 ": "Pleading Face",
  "😦 ": "Frowning Face with Open Mouth",
  "😧 ": "Anguished Face",
  "😨 ": "Fearful Face",
  "😰 ": "Anxious Face with Sweat",
  "😥 ": "Sad but Relieved Face",
  "😢 ": "Crying Face",
  "😭 ": "Loudly Crying Face",
  "😱 ": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😓": "Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": "Tired Face",
  "🥱": "Yawning Face",
  "😤": "Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": "Angry Face",
  "😠":
    "angry face" /** add some more to show how the app now expands when there's new data */
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState(""); /** concept 2 is useState */
  const [meaning, setMeaning] = useState("translation will appear here..");

  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    /** concept 3 is onchange */
    <div className="App">
      <h1>inside outttttt</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={"Search your emoji"}
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <h2> {emoji} </h2> {/** Concept 1: JSX */}
      <h3> {meaning} </h3> {/** how much part is re-rendered. */}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
