-- CreateTable
CREATE TABLE "profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "bio" TEXT,
    "contactEmail" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "website" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "baseUrl" TEXT NOT NULL,
    "icon" TEXT,
    "archive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "handle" (
    "id" TEXT NOT NULL,
    "platformId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "archive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "handle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "link" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "archive" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- CreateIndex
CREATE INDEX "profile_userId_idx" ON "profile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "platform_name_key" ON "platform"("name");

-- CreateIndex
CREATE INDEX "handle_userId_order_idx" ON "handle"("userId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "handle_platformId_userId_key" ON "handle"("platformId", "userId");

-- CreateIndex
CREATE INDEX "link_userId_order_idx" ON "link"("userId", "order");

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "handle" ADD CONSTRAINT "handle_platformId_fkey" FOREIGN KEY ("platformId") REFERENCES "platform"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "handle" ADD CONSTRAINT "handle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "link" ADD CONSTRAINT "link_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
