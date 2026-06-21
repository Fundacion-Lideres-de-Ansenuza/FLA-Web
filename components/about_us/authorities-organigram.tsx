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

const LEADERSHIP: Person[] = [
  {
    name: "Florencia Barbero",
    roleKey: "aboutUs.authorities.leadership.roles.ambientaliaCoDirector",
    href: "https://www.linkedin.com/in/florenciabelenbarbero?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    avatar: "/staff/Florencia_Barbero.webp",
  },
  {
    name: "Marina Castellino",
    roleKey: "aboutUs.authorities.leadership.roles.ambientaliaCoDirector",
    href: "https://www.linkedin.com/in/marina-castellino?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    avatar: "/staff/Marina_Castellino.webp",
  },
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
  {
    name: "Marilyn Mercado",
    roleKey: "aboutUs.authorities.leadership.roles.lideresDirector",
    href: "https://www.linkedin.com/in/marilyn-mercado-6b358b346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
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

function BoardCard({ person }: { person: Person }) {
  const { t } = useTranslation()
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

  return (
    <a
      href={person.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${person.name} - ${t(person.roleKey)}`}
      className="group block h-full overflow-hidden rounded-[28px] border border-[#f2d9d6] bg-white shadow-[0_18px_45px_rgba(144,20,14,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(144,20,14,0.11)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc2222]/35"
    >
      <div className="relative h-full">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#bc2222_0%,#f45e5e_100%)]" />
        <div className="flex h-full flex-col gap-4 p-5 pt-6 md:flex-row md:items-center md:gap-5 md:p-6">
          <span className="inline-flex w-fit rounded-full bg-[#fff4f3] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#bc2222] md:order-1 md:flex-none">
            {t(person.roleKey)}
          </span>

          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[24px] border border-[#f1d8d8] bg-[linear-gradient(135deg,#fff4f3_0%,#fbe1de_100%)] shadow-[0_10px_24px_rgba(144,20,14,0.08)] md:order-2">
            {person.avatar ? (
              <Image
                src={person.avatar}
                alt={person.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="96px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center font-contrail-one text-2xl text-[#8f1f1b]">
                {initials}
              </div>
            )}
          </div>

          <h3 className="min-w-0 font-contrail-one text-[24px] leading-tight text-[#160101] md:order-3">
            {person.name}
          </h3>
        </div>
      </div>
    </a>
  )
}

function LeadershipCard({ person }: { person: Person }) {
  const { t } = useTranslation()
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")

  return (
    <a
      href={person.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${person.name} - ${t(person.roleKey)}`}
      className="group block h-full min-h-[340px] overflow-hidden rounded-[28px] border border-[#f2d9d6] bg-white shadow-[0_18px_45px_rgba(144,20,14,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(144,20,14,0.11)] focus-visible:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bc2222]/35"
    >
      <div className="relative h-full">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[linear-gradient(90deg,#bc2222_0%,#f45e5e_100%)]" />
        <div className="flex h-full flex-col gap-5 p-5 pt-6 md:p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[24px] border border-[#f1d8d8] bg-[linear-gradient(135deg,#fff4f3_0%,#fbe1de_100%)] shadow-[0_10px_24px_rgba(144,20,14,0.08)]">
              {person.avatar ? (
                <Image
                  src={person.avatar}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="80px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-contrail-one text-2xl text-[#8f1f1b]">
                  {initials}
                </div>
              )}
            </div>
            <div className="min-w-0 space-y-2">
              <h3 className="font-contrail-one text-[24px] leading-tight text-[#160101]">{person.name}</h3>
              <span className="inline-flex rounded-full bg-[#fff4f3] px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#bc2222]">
                {t(person.roleKey)}
              </span>
            </div>
          </div>

        </div>
      </div>
    </a>
  )
}

function OrganigramSection({
  title,
  items,
  columnsClass,
  renderCard,
}: {
  title: string
  items: Person[]
  columnsClass: string
  renderCard: (person: Person) => JSX.Element
}) {
  const { t } = useTranslation()

  return (
    <section className="relative rounded-[34px] border border-[#f1d6d6] bg-[linear-gradient(180deg,#fffefe_0%,#fff8f7_100%)] px-5 py-6 shadow-[0_18px_50px_rgba(144,20,14,0.05)] md:px-7 md:py-8">
      <div className="mb-6 text-center">
        <span className="inline-flex rounded-full bg-[#bc2222] px-4 py-1.5 text-xs font-black uppercase tracking-[0.24em] text-white shadow-lg">
          {title}
        </span>
      </div>

      <div className={`grid gap-4 ${columnsClass}`}>
        {items.map((person) => (
          renderCard(person)
        ))}
      </div>

    </section>
  )
}

export default function AuthoritiesOrganigram() {
  const { t } = useTranslation()

  return (
    <section className="relative py-2">
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto mb-6 h-10 w-px bg-gradient-to-b from-transparent via-[#d9b6b1] to-transparent" />

        <div className="space-y-8">
          <OrganigramSection
            title={t("aboutUs.authorities.boardTitle")}
            items={BOARD}
            columnsClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-4"
            renderCard={(person) => <BoardCard key={`${person.name}-${person.roleKey}`} person={person} />}
          />

          <div className="relative mx-auto h-10 w-px bg-gradient-to-b from-[#d9b6b1] via-[#eac8c3] to-transparent" />

          <OrganigramSection
            title={t("aboutUs.authorities.leadershipTitle")}
            items={LEADERSHIP}
            columnsClass="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
            renderCard={(person) => <LeadershipCard key={`${person.name}-${person.roleKey}`} person={person} />}
          />
        </div>
      </div>
    </section>
  )
}
