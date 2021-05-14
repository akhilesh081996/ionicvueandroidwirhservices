import { ref, onMounted, watch } from 'vue';
import {
    Plugins, CameraResultType, CameraSource, CameraPhoto,
    Capacitor, FilesystemDirectory
} from "@capacitor/core";
import { Photo } from '@/interface/usePhotoGallery';

export function usePhotoGallery() {
    const { Camera } = Plugins;

    const photos = ref<Photo[]>([]);

    const takePhoto = async () => {
        const cameraPhoto = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            source: CameraSource.Camera,
            quality: 100
        });

        const fileName = new Date().getTime() + '.jpeg';
        const savedFileImage = {
            filepath: fileName,
            webviewPath: cameraPhoto.webPath
        };

        photos.value = [savedFileImage, ...photos.value];
    };

    return {
        takePhoto,
        photos
    };
}