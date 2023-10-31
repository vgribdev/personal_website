'use client'
import { GithubIcon } from './svg/Github'
import { LinkedinIcon } from './svg/Linkedin'

const githubUrl = 'https://github.com/vgribdev'
const linkedinUrl = 'https://linkedin.com/in/vgrib'

export const Social: React.FC = () => {
    return (
        <div className="flex items-center justify-center gap-3">
            <a
                href={githubUrl}
                className="animate-[0.6s_ease-out_0s_1_slideUp] hover:opacity-60"
                aria-label="Github"
            >
                <GithubIcon className={'text-black'} />
            </a>

            <a
                href={linkedinUrl}
                className="animate-[0.6s_ease-out_0s_1_slideUp] hover:opacity-60"
                aria-label="Linkedin"
            >
                <LinkedinIcon className={'text-black'} />
            </a>
        </div>
    )
}
