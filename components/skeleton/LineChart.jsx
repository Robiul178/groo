export default function ChartSkeleton() {
  return (
    <svg
      version="1.1"
      className="aspect-video"
      viewBox="-5 -55 110 110"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path id="sin" d="m0 0c42 167 84 300 125 300" fill="none" />
        <use id="si" xlinkHref="#sin" transform="scale(0.1,-0.1)" />
        <pattern id="test" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect
            width="10"
            height="10"
            fill="none"
            stroke="blue"
            strokeWidth="0.15"
          />
        </pattern>
        <g id="hf">
          <use xlinkHref="#si" />
          <use xlinkHref="#si" transform="translate(25) scale(-1,1)" />
        </g>
        <g id="gz">
          <use xlinkHref="#hf" />
          <use xlinkHref="#hf" transform="translate(50) scale(-1,-1)" />
        </g>
      </defs>
      <g stroke="#D1D5DB" strokeWidth="5" fill="none">
        <use xlinkHref="#gz" />
        <use xlinkHref="#gz" transform="translate(-50)" />
        <use xlinkHref="#gz" transform="translate(50)" />
        <use xlinkHref="#gz" transform="translate(100)" />
      </g>
    </svg>
  );
}
