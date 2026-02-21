-- CreateTable
CREATE TABLE "slug" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "linkId" TEXT,
    "handleId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "slug_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "slug_slug_key" ON "slug"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "slug_linkId_key" ON "slug"("linkId");

-- CreateIndex
CREATE UNIQUE INDEX "slug_handleId_key" ON "slug"("handleId");

-- CreateIndex
CREATE INDEX "slug_linkId_idx" ON "slug"("linkId");

-- CreateIndex
CREATE INDEX "slug_handleId_idx" ON "slug"("handleId");

-- AddForeignKey
ALTER TABLE "slug" ADD CONSTRAINT "slug_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "link"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "slug" ADD CONSTRAINT "slug_handleId_fkey" FOREIGN KEY ("handleId") REFERENCES "handle"("id") ON DELETE CASCADE ON UPDATE CASCADE;
