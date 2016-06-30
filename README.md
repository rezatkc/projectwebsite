# projectwebsite

## Pengumuman

* Usahakan clone pada folder c:/xampp/htdocs (untuk windows) atau /opt/lampp/htdocs or /var/www (untuk linux)
* Ketika sudah berhasil masuk kedalam active directory, pindah ke branch develop dengan perintah "git checkout develop"
* Usahakan semua commit dan penambahan file dilakukan pada *Branch* tersebut.
* Perintah untuk melakukan push terhadap perubahan file : 
	* > git _pull_ origin __develop__ (_usahakan pull terlebih dahulu agar terhindar dari konflik_)
	* > git _push_ origin __develop__
	* Jika sudah melakukan push ke branch develop dan tidak terjadi perubahan apa - apa terhadap repository utama (yang ada di github), jangan takut jangan risau :)) Kalian cukup melakukan perintah : 
		* > git checkout master
		* > git merge develop
		* > git push origin *master*
		* _ingat! Pastikan teman anda tahu bahwa anda telah melakukan merging dari branch develop ke branch master

> NB : Merging (Penggabungan branch) dilakukan belakangan. Usahakan jika ingin merging, beritahu teman dahulu agar tidak terjadi konflik pada commit / code yang sudah di push ke repository.

