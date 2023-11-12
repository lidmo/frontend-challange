<template>
    <div>
        <Head>
            <Link rel="icon" href="/favicon/favicon.ico" sizes="any" />
            <Link rel="icon" href="/favicon/1.icon.png" type="image/png" sizes="16x16" />
            <Link rel="icon" href="/favicon/2.icon.png" type="image/png" sizes="32x32" />
            <Link rel="icon" href="/favicon/3.icon.png" type="image/png" sizes="192x192" />
            <Link rel="icon" href="/favicon/4.icon.png" type="image/png" sizes="512x512" />
            <Link rel="icon" href="/favicon/apple-icon.png" type="image/png" sizes="180x180" />
            <Link rel="apple-touch-icon" href="/favicon/apple-icon.png" type="image/png" sizes="180x180" />
        </Head>

        <NuxtLoadingIndicator color="#EEA823" :height="5" />
        <NuxtPage />
    </div>
</template>