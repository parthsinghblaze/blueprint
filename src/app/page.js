"use client";

import Image from "next/image";
import {useState} from "react";
import Modal from "./ui/Model";
import Skeleton from "./ui/Skeleton";

export default function Home() {

    const [isModalOpen, setIsModalOpen] = useState({
        circle: false,
        rectangle: false
    });

    const openModal = ({ modelName }) => {
        setIsModalOpen({ ...isModalOpen, [modelName]: true })
    };
    const closeModal = ({ modelName }) => {
        setIsModalOpen({ ...isModalOpen, [modelName]: false })
    }

    return (
        <div className={'h-[100%] flex items-center justify-center'}>
            <div className={'relative w-[75%]'}>
                <Image src="/images/industrial_image.jpg"
                       width={1000}
                       height={1000}
                       alt="Picture of the author" className={"w-full"}/>
                <div className={'circle'} onClick={() => openModal({ modelName: 'circle' })}>
                    <Skeleton />
                </div>
                <div className={'rectangle'} onClick={() => openModal({ modelName: 'rectangle' })}>
                    <Skeleton />
                </div>
            </div>

            <Modal isOpen={isModalOpen.circle} onClose={() => closeModal({ modelName: 'circle' })} title="Circle Modal">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum error illum impedit labore laboriosam laborum, libero minima molestias, natus nemo non obcaecati odit quod reiciendis tempore tenetur velit. Quibusdam, quod?</p>
            </Modal>

            <Modal isOpen={isModalOpen.rectangle} onClose={() => closeModal({ modelName: 'rectangle' })} title="Reactangle Modal">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dolor eligendi eos esse facere facilis itaque iure magni maxime modi molestiae nostrum odit placeat praesentium quae quam quos ratione, voluptatum.</p>
            </Modal>

        </div>
    );
}
