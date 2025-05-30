import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Skairipa Apps Inc.</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="title" content="404 - Skairipa Apps Inc." />
        <meta
          name="description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skairipaapps.com/" />
        <meta property="og:title" content="Skairipa Apps Inc." />
        <meta
          property="og:description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />
        <meta
          property="og:image"
          content="https://skairipaapps.com/cover.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://skairipaapps.com/" />
        <meta property="twitter:title" content="Skairipa Apps Inc." />
        <meta
          property="twitter:description"
          content="Discover a powerful ecosystem of apps, from web to iOS, all designed with your needs at the center. Seamlessly connected, user-focused, and built to enhance your digital lifestyle—experience technology that works for YOU."
        />
        <meta property="twitter:image" content="/cover.svg" />
      </Helmet>

      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900">
                404 Page Not Found
              </h1>
            </div>

            <p className="mt-4 text-sm text-gray-600">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
