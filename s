[33mcommit 8f1df98fea1ffd17f0f9ab9392c758a80be00422[m
Author: trueluuck <trueluuck@gmail.com>
Date:   Sat Jul 26 04:13:28 2025 -0300

    feat: modo escuro/claro com context API, refatoração visual e melhorias gerais

[1mdiff --git a/src/components/ui/Footer.tsx b/src/components/ui/Footer.tsx[m
[1mindex dea022c..1d2d0af 100644[m
[1m--- a/src/components/ui/Footer.tsx[m
[1m+++ b/src/components/ui/Footer.tsx[m
[36m@@ -1,14 +1,14 @@[m
 export default function Footer() {[m
   return ([m
[31m-    <footer className="w-full bg-gray-100 py-6 mt-16">[m
[32m+[m[32m    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6 mt-16 transition-colors duration-300">[m
       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">[m
[31m-        <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">[m
[32m+[m[32m        <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">[m
           &copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.[m
         </p>[m
 [m
         <a[m
           href="/contact"[m
[31m-          className="text-sm text-blue-600 hover:underline transition"[m
[32m+[m[32m          className="text-sm text-blue-600 dark:text-blue-400 hover:underline transition"[m
         >[m
           Fale Conosco[m
         </a>[m

[33mcommit 3dbd0ccba5ed8b2639e3ea18324582d08ca416bf[m
Author: trueluuck <trueluuck@gmail.com>
Date:   Mon Jul 21 14:22:22 2025 -0300

    Finaliza rebase e atualiza projeto funcional para produção

[1mdiff --git a/src/components/ui/Footer.tsx b/src/components/ui/Footer.tsx[m
[1mindex 3b53b1f..dea022c 100644[m
[1m--- a/src/components/ui/Footer.tsx[m
[1m+++ b/src/components/ui/Footer.tsx[m
[36m@@ -1,9 +1,17 @@[m
 export default function Footer() {[m
   return ([m
[31m-    <footer className="w-full bg-gray-900 text-white py-6 px-4 mt-10">[m
[31m-      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">[m
[31m-        <p>&copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.</p>[m
[31m-        <p>Desenvolvido com ❤️ e Next.js</p>[m
[32m+[m[32m    <footer className="w-full bg-gray-100 py-6 mt-16">[m
[32m+[m[32m      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">[m
[32m+[m[32m        <p className="text-gray-600 text-sm text-center md:text-left mb-4 md:mb-0">[m
[32m+[m[32m          &copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.[m
[32m+[m[32m        </p>[m
[32m+[m
[32m+[m[32m        <a[m
[32m+[m[32m          href="/contact"[m
[32m+[m[32m          className="text-sm text-blue-600 hover:underline transition"[m
[32m+[m[32m        >[m
[32m+[m[32m          Fale Conosco[m
[32m+[m[32m        </a>[m
       </div>[m
     </footer>[m
   );[m

[33mcommit c08d46e3fcbab37c1e64665127fa168315549375[m
Author: trueluuck <trueluuck@gmail.com>
Date:   Mon Jul 21 12:46:17 2025 -0300

    Primeiro commit - Projeto Fedumenti

[1mdiff --git a/src/components/ui/Footer.tsx b/src/components/ui/Footer.tsx[m
[1mnew file mode 100644[m
[1mindex 0000000..3b53b1f[m
[1m--- /dev/null[m
[1m+++ b/src/components/ui/Footer.tsx[m
[36m@@ -0,0 +1,10 @@[m
[32m+[m[32mexport default function Footer() {[m
[32m+[m[32m  return ([m
[32m+[m[32m    <footer className="w-full bg-gray-900 text-white py-6 px-4 mt-10">[m
[32m+[m[32m      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">[m
[32m+[m[32m        <p>&copy; {new Date().getFullYear()} Fedumenti Group. Todos os direitos reservados.</p>[m
[32m+[m[32m        <p>Desenvolvido com ❤️ e Next.js</p>[m
[32m+[m[32m      </div>[m
[32m+[m[32m    </footer>[m
[32m+[m[32m  );[m
[32m+[m[32m}[m
