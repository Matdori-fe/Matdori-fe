export default function Background({
	className,
	children,
	fuc,
}: {
	className?: string;
	children?: React.ReactNode;
	fuc?: any;
}) {
	return (
		<div
			onClick={fuc}
			className={`fixed md:w-[768px] w-full h-full bg-transparent z-1 top-0 ${className} flex items-end`}
		>
			{children}
		</div>
	);
}
