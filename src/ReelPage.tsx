import reelSrc from './assets/portfolio_reel.mp4'
import clsx from 'clsx'
import ReactPlayer from 'react-player'

export function ReelPage(): JSX.Element {
    return (
        <div className={clsx("flex flex-col relative transition-colors duration-75 justify-start items-center pb-16 md:py-32 grow gap-6 md:gap-12 dark:bg-black bg-white")}>
            <div className="w-full px-4 md:px-8 md:pl-56 max-w-[85rem] flex flex-col gap-6 md:gap-8">
                <div className="w-full flex justify-center">
                    <div className="w-full max-w-5xl aspect-video bg-black rounded-sm overflow-hidden">
                        <ReactPlayer
                            src={reelSrc}
                            controls
                            width="100%"
                            height="100%"
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

