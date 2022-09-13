import ButtonPrimary from 'components/Button/primary'
import ButtonSecondary from 'components/Button/secondary'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className="relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="my-6">
            <h1 className="text-3xl font-bold text-zinc-700">@KYDOLLAR</h1>
          </div>
          <div className="my-6">
            <ButtonPrimary onClick={() => alert('This is button primary!')} inputClassName="mx-4">Primary</ButtonPrimary>
            <ButtonSecondary onClick={() => alert('This is button secondary!')} inputClassName="mx-4">Secondary</ButtonSecondary>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
