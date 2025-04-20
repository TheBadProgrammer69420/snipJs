import clipboardy from "clipboardy";

export const Copy = async (text) => {
    try {
        await clipboardy.write(text);
        console.log("Copied the text: " + text);
    } catch (err) {
        console.error("Failed to copy text: ", err);
    }
};

export const Paste = async () => {
    try {
        const text = await clipboardy.read();
        console.log("Pasted text: " + text);
        return text;
    } catch (err) {
        console.error("Failed to paste text: ", err);
    }
};

// Example usage
Copy("Hello, world!");
Paste();