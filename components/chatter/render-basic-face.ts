
type BasicFaceProps = {
    ctx: CanvasRenderingContext2D;
    color?: string;
}

export function renderBasicFace(props: BasicFaceProps) {
    const { ctx, color = "black" } = props;

    if (!ctx) {
        console.error("Canvas context is not available.");
        return;
    }

    const { width, height } = ctx.canvas;

    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = color || "black";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, width / 2 - 20, 0, Math.PI * 2);
    ctx.fill();
}