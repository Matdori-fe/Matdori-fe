export default function Background({
	className,
	children,
	onClose,
}: {
	className?: string;
	children?: React.ReactNode;
	onClose?: () => void;
}) {
	return (
		<div
			onClick={onClose}
			className={`z-3 fixed w-screen h-full bg-transparent z-1 top-0 left-0 ${className} flex items-end`}
		>
			{children}
		</div>
	);
}
