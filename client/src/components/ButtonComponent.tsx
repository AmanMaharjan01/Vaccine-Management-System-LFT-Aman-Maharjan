export interface IButton {
  label: string;
  bgColor?: string;
  color?: string;
  handleClick: () => void;
}

export default function ExampleComponent({
  label,
  bgColor = '#fff',
  color = '#000',
  handleClick,
}: IButton) {
  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        style={{
          backgroundColor: bgColor,
          padding: '10px 20px',
          border: 'unset',
          color,
        }}
      >
        {label ?? 'Say hi to AMan'}
      </button>
    </div>
  );
}
