type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-primary-background border-primary-foreground rounded-md border-2 hover:bg-gray-700 ${props.className}`}
    >
      {children}
    </button>
  );
}
