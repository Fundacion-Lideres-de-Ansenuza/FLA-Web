import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowToDonate() {
    return (
        <main className="min-h-screen bg-background pt-24 pb-12">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <section className="mb-16 text-center">
                    <h1 className="font-fla text-6xl text-primary mb-6">¿Cómo Donar?</h1>
                    <p className="font-arimo text-xl text-muted-foreground max-w-2xl mx-auto">
                        Tu contribución hace posible que sigamos transformando la educación.
                        Elige el método que prefieras y sigue los pasos a continuación.
                    </p>
                </section>

                {/* Methods Section */}
                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* Donar Online */}
                    <div className="bg-card rounded-xl shadow-lg border border-border p-8 flex flex-col items-center text-center transition-all hover:shadow-xl group">
                        <div className="w-48 h-24 relative mb-8 flex items-center justify-center">
                            {/* Using 'contain' to ensure the logo fits well within the dimensions */}
                            <Image
                                src="/images/methods-of-donations/donarOnline.png"
                                alt="Donar Online"
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        <h2 className="font-fla text-3xl text-secondary mb-4 group-hover:text-primary transition-colors">Donar Online</h2>

                        <div className="font-arimo text-foreground space-y-4 text-left w-full mb-8">
                            {/* Placeholders for textual content from PDF */}
                            <p>
                                Apoya nuestra causa de forma segura y rápida a través de nuestra plataforma de donación online.
                            </p>
                            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                                <p className="font-semibold mb-2">Instrucciones:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>[Paso 1 del instructivo Donar Online]</li>
                                    <li>[Paso 2 del instructivo Donar Online]</li>
                                    <li>[Paso 3 del instructivo Donar Online]</li>
                                </ul>
                            </div>
                        </div>

                        <Button asChild className="mt-auto w-full max-w-xs font-arimo text-lg">
                            <Link href="#">
                                Ir a Donar Online
                            </Link>
                        </Button>
                    </div>

                    {/* PayPal */}
                    <div className="bg-card rounded-xl shadow-lg border border-border p-8 flex flex-col items-center text-center transition-all hover:shadow-xl group">
                        <div className="w-48 h-24 relative mb-8 flex items-center justify-center">
                            {/* Using 'contain' to ensure the logo fits well within the dimensions */}
                            <Image
                                src="/images/methods-of-donations/descarga.png"
                                alt="PayPal"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>

                        <h2 className="font-fla text-3xl text-secondary mb-4 group-hover:text-primary transition-colors">PayPal</h2>

                        <div className="font-arimo text-foreground space-y-4 text-left w-full mb-8">
                            {/* Placeholders for textual content from PDF */}
                            <p>
                                Si te encuentras fuera de Argentina o prefieres usar PayPal, también puedes sumarte.
                            </p>
                            <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
                                <p className="font-semibold mb-2">Instrucciones:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>[Paso 1 del instructivo PayPal]</li>
                                    <li>[Paso 2 del instructivo PayPal]</li>
                                    <li>[Paso 3 del instructivo PayPal]</li>
                                </ul>
                            </div>
                        </div>

                        <Button asChild variant="outline" className="mt-auto w-full max-w-xs font-arimo text-lg border-secondary text-secondary hover:bg-secondary hover:text-white">
                            <Link href="#">
                                Donar con PayPal
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </main>
    )
}
