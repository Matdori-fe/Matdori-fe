export default function Background({
	className,
	children,
	onClick,
}: {
	className?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className={`fixed w-screen h-full bg-transparent z-1 top-0 left-0 ${className} flex items-end`}
		>
			{children}
		</div>
	);
}
