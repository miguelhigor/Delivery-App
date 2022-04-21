-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_fk_id_deliveryman_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "fk_id_deliveryman" DROP NOT NULL,
ALTER COLUMN "delivered_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_fk_id_deliveryman_fkey" FOREIGN KEY ("fk_id_deliveryman") REFERENCES "deliveryman"("id") ON DELETE SET NULL ON UPDATE CASCADE;
