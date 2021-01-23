
export function styleButtonWhite(color, width) {
    const style = {
        view: { borderColor: color },
        text: { color: color }
    };
    if(width) { style.view.width = width };

    return style
}

export function styleButtonColor(color, width) {
    const style = {
        view: {
            backgroundColor: color,
            borderColor: color
        }
    };
    if(width) { style.view.width = width };

    return style
}