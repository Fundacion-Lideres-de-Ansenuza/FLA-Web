"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"

type Person = {
  name: string
  roleKey: string
  href: string
  avatar?: string
}

const BOARD: Person[] = [
  {
    name: "Florencia Barbero",
    roleKey: "aboutUs.authorities.board.roles.president",
    href: "https://www.linkedin.com/in/florenciabelenbarbero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    avatar: "/staff/Florencia_Barbero.webp",
  },
  {
    name: "Marina Castellino",
    roleKey: "aboutUs.authorities.board.roles.treasurer",
    href: "https://www.linkedin.com/in/marina-castellino?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Marina_Castellino.webp",
  },
  {
    name: "Cecilia Brusa",
    roleKey: "aboutUs.authorities.board.roles.secretary",
    href: "https://www.linkedin.com/in/cecilia-brusa-5ba411128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Cecilia_Brusa.webp",
  },
  {
    name: "Manuel Parada Parejas",
    roleKey: "aboutUs.authorities.board.roles.member",
    href: "https://www.linkedin.com/in/manuel-parada-70a4b4328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Manuel_Parada.webp",
  },
]

const LEADERSHIP_AMBIENTALIA: Person[] = [
  {
    name: "Florencia Barbero",
    roleKey: "aboutUs.authorities.leadership.roles.ambientaliaCoDirectorFemale",
    href: "https://www.linkedin.com/in/florenciabelenbarbero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    avatar: "/staff/Florencia_Barbero.webp",
  },
  {
    name: "Marina Castellino",
    roleKey: "aboutUs.authorities.leadership.roles.ambientaliaCoDirectorFemale",
    href: "https://www.linkedin.com/in/marina-castellino?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Marina_Castellino.webp",
  },
]

const LEADERSHIP_SOMOS: Person[] = [
  {
    name: "Sofía Lanata",
    roleKey: "aboutUs.authorities.leadership.roles.somosCoDirectorFemale",
    href: "https://ar.linkedin.com/in/sof%C3%ADa-lanata-27b79a363",
    avatar: "/staff/Sofia_Lanata.webp",
  },
  {
    name: "Xavier Córdoba Ferreyra",
    roleKey: "aboutUs.authorities.leadership.roles.somosCoDirectorMale",
    href: "https://www.linkedin.com/in/xavier-c%C3%B3rdoba-915911343?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Xavier_Ferreyra.webp",
  },
]

const LEADERSHIP_DIRECTORS: Person[] = [
  {
    name: "Joaquín Gatica",
    roleKey: "aboutUs.authorities.leadership.roles.communicationDirector",
    href: "https://www.linkedin.com/in/ramirojoaquingatica?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    avatar: "/staff/Joaquin_Gatica.webp",
  },
  {
    name: "Cecilia Brusa",
    roleKey: "aboutUs.authorities.leadership.roles.institutionalDirector",
    href: "https://www.linkedin.com/in/cecilia-brusa-5ba411128?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Cecilia_Brusa.webp",
  },
]

function Avatar({ person }: { person: Person }) {
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

  return person.avatar ? (
    <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-[22px] border border-[#f0d9d5] bg-[linear-gradient(135deg,#fff4f3_0%,#fbe4e0_100%)] shadow-[0_10px_24px_rgba(144,20,14,0.08)]">
      <Image src={person.avatar} alt={person.name} fill className="object-cover" sizes="72px" />
    </div>
  ) : (
    <div className="flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[22px] border border-[#f0d9d5] bg-[linear-gradient(135deg,#fff4f3_0%,#fbe4e0_100%)] font-contrail text-xl text-[#8f1f1b] shadow-[0_10px_24px_rgba(144,20,14,0.08)]">
      {initials}
    </div>
  )
}

function BoardNode({ person }: { person: Person }) {
  const { t } = useTranslation()

  return (
    <a
      href={person.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${person.name} - ${t(person.roleKey)}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-[30px] border border-[#f2d9d6] bg-white px-4 py-5 shadow-[0_18px_45px_rgba(144,20,14,0.06)] transition-transform duration-300 group-hover:-translate-y-1 h-full flex flex-col">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#bc2222_0%,#f45e5e_100%)]" />
        <div className="flex flex-col items-center gap-4 pt-2 flex-grow">
          <span className="inline-flex rounded-full bg-[#fff4f3] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[#bc2222] text-center">
            {t(person.roleKey)}
          </span>
          <Avatar person={person} />
          <h3 className="text-center font-contrail text-[22px] leading-tight text-[#160101]">
            {person.name}
          </h3>
        </div>
      </div>
    </a>
  )
}

function LeadershipNode({ person }: { person: Person }) {
  const { t } = useTranslation()

  return (
    <a
      href={person.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${person.name} - ${t(person.roleKey)}`}
      className="group block"
    >
      <div className="relative h-full min-h-[148px] overflow-hidden rounded-[26px] border border-[#f2d9d6] bg-white px-4 py-4 shadow-[0_14px_36px_rgba(144,20,14,0.05)] transition-transform duration-300 group-hover:-translate-y-1">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#bc2222_0%,#f45e5e_100%)]" />
        <div className="flex h-full items-center gap-3 pt-2">
          <Avatar person={person} />
          <div className="min-w-0">
            <h3 className="font-contrail text-[20px] leading-tight text-[#160101]">{person.name}</h3>
            <p className="mt-2 inline-flex rounded-full bg-[#fff4f3] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#bc2222]">
              {t(person.roleKey)}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

function LeadershipCluster({ title, items, columnsClass }: { title: string; items: Person[]; columnsClass: string }) {
  const { t } = useTranslation()

  return (
    <div className="relative">
      <div className="mx-auto mb-3 h-8 w-px bg-[#d9b6b1]" />
      <div className="rounded-[30px] border border-[#f2d9d6] bg-white/80 p-4 shadow-[0_14px_36px_rgba(144,20,14,0.04)] md:p-5">
        <div className="mb-4 text-center">
          <span className="inline-flex rounded-full bg-[#fff4f3] px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.18em] text-[#bc2222]">
            {t(title)}
          </span>
        </div>
        <div className={`grid gap-4 ${columnsClass}`}>
          {items.map((person) => (
            <LeadershipNode key={`${person.name}-${person.roleKey}-${title}`} person={person} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function AuthoritiesOrganigram() {
  const { t } = useTranslation()

  return (
    <section className="relative py-2">
      <div className="mx-auto max-w-6xl">
        <div className="relative mx-auto mb-4 h-10 w-px bg-linear-to-b from-transparent via-[#d9b6b1] to-transparent" />

        <div className="rounded-[38px] border border-[#f1d6d6] bg-[linear-gradient(180deg,#fffefe_0%,#fff8f7_100%)] px-4 py-6 shadow-[0_18px_50px_rgba(144,20,14,0.05)] md:px-7 md:py-8">
          <div className="mb-8 text-center">
            <span className="inline-flex rounded-full bg-[#bc2222] px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
              {t("aboutUs.authorities.boardTitle")}
            </span>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-8 w-px -translate-x-1/2 bg-[#d9b6b1] lg:block" />
            <div className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#e7cfc9] lg:block" />
            <div className="grid gap-4 lg:grid-cols-4">
              {BOARD.map((person) => (
                <BoardNode key={`${person.name}-${person.roleKey}`} person={person} />
              ))}
            </div>
          </div>

          <div className="mt-10 border-t border-dashed border-[#ecd5d0] pt-8">
            <div className="mb-8 text-center">
              <span className="inline-flex rounded-full bg-[#bc2222] px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
                {t("aboutUs.authorities.leadershipTitle")}
              </span>
            </div>

            <div className="space-y-6">
              <LeadershipCluster
                title="aboutUs.authorities.leadership.groups.ambientalia"
                items={LEADERSHIP_AMBIENTALIA}
                columnsClass="grid-cols-1 sm:grid-cols-2"
              />
              <LeadershipCluster
                title="aboutUs.authorities.leadership.groups.somos"
                items={LEADERSHIP_SOMOS}
                columnsClass="grid-cols-1 sm:grid-cols-2"
              />
              <LeadershipCluster
                title="aboutUs.authorities.leadership.groups.directors"
                items={LEADERSHIP_DIRECTORS}
                columnsClass="grid-cols-1 justify-items-center sm:grid-cols-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
