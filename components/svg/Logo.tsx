export const Logo: React.FC<{ fill: string }> = ({ fill }) => {
    return (
        <svg
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 502.664 502.664"
            enableBackground={'new 0 0 502.664 502.664'}
            xmlSpace="preserve"
            width={'32px'}
            height={'32px'}
        >
            <g>
                <g>
                    <path
                        fill={fill}
                        d="M153.821,358.226L0,274.337v-46.463l153.821-83.414v54.574L46.636,250.523l107.185,53.431
			C153.821,303.954,153.821,358.226,153.821,358.226z"
                    />
                    <path
                        fill={fill}
                        d="M180.094,387.584L282.103,115.08h32.227L212.084,387.584H180.094z"
                    />
                    <path
                        fill={fill}
                        d="M348.843,358.226v-54.272l107.164-52.999l-107.164-52.59v-53.927l153.821,83.522v46.183
			L348.843,358.226z"
                    />
                </g>
            </g>
        </svg>
    )
}
